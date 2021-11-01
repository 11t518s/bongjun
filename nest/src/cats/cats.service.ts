import { CatRequestDto } from './../dto/cats.request.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatsRepository } from './cats.repository';

import * as bcript from 'bcrypt';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existsByEmail(email);
    if (isCatExist) {
      throw new UnauthorizedException('해당 고양이는 이미 존재해요 ㅠㅠ');
    }
    const hashedPassword = await bcript.hash(password, 10);

    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
