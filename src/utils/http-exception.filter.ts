import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch(Error)
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status: number;
    try {
      status = exception.getStatus();
    } catch (e) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    const message =
      exception.getResponse()['message'] || 'Internal server error';

    // Construct the log message
    const logMessage = `[${new Date().toISOString()}] {pathUrl: ${request.url}, request: ${JSON.stringify(request.body)}, error_message: ${message}}`;

    // Log the message to the console
    console.log(logMessage);

    // Send the response to the client
    response.status(status).json({
      statusCode: status,
      path: request.url,
      message: status === 500 ? 'Internal server error' : message,
    });
  }
}
