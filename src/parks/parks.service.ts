import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';
import { Park } from './entities/park.entity';

@Injectable()
export class ParksService {
  constructor(
    @InjectRepository(Park)
    private parkRepository: Repository<Park>,
  ) {}

  create(createParkDto: CreateParkDto) {
    return this.parkRepository.save(createParkDto);
  }

  findAll() {
    return this.parkRepository.find();
  }

  findOne(id: number) {
    return this.parkRepository.findOneBy({ id: id });
  }

  update(id: number, updateParkDto: UpdateParkDto) {
    return this.parkRepository.update(id, updateParkDto);
  }

  remove(id: number) {
    return this.parkRepository.delete(id);
  }
}
