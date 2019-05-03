import { Injectable } from '@angular/core';;
import { Talent } from './talent.type';

@Injectable()
export class TalentService {
    talent: Talent;

    constructor() {
    }
}