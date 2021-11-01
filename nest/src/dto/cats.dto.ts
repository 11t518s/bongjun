import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats/cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '3asdfasdf',
    description: 'id',
  })
  id: string;
}
