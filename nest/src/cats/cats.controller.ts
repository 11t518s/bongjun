import { JwtAuthGuard } from './../auth/jwt/jwt.guard';
import { AuthService } from './../auth/auth.service';
import { LoginRequestDto } from './../auth/dto/login.request.dto';
import { CatRequestDto } from './../dto/cats.request.dto';
import { ReadOnlyCatDto } from '../dto/cats.dto';
import {
  Body,
  Controller,
  Get,
  Post, UploadedFiles,
  UseFilters,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatsService } from './cats.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { Cat } from './cats.schema';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@CurrentUser() cat: Cat) {
    return cat.readOnlyData;
  }

  @ApiResponse({
    status: 200,
    description: '성공',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }

  @ApiOperation({ summary: '이미지업로드' })
  @UseInterceptors(FileInterceptor('image'))
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadCatImg(@UploadedFiles() files: Array<Express.Multer.File>) {
    return 'uploadImg';
  }
}
