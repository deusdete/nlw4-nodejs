import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("surveys")
class Surveys {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_it: Date;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { Surveys };