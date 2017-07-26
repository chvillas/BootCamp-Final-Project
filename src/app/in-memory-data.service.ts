import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {
        id: 0,
        photo: "../assets/img/aquaman.png",
        name: 'Zero',
        averageGrade: 5,
        deliveredHomeworks: 6,
        missingHomeworks: 0,
        updated: Date.now()
      },
      {
        id: 11,
        photo: "../assets/img/batman.png",
        name: 'Mr. Nice',
        averageGrade: 4.5,
        deliveredHomeworks: 6,
        missingHomeworks: 0,
        updated: 87348734384
      },
      {
        id: 12,
        photo: "../assets/img/daredevil.png",
        name: 'Narco',
        averageGrade: 3,
        deliveredHomeworks: 3,
        missingHomeworks: 3,
        updated: 2038596527
      },
      {
        id: 13,
        photo: "../assets/img/hulk.png",
        name: 'Bombasto',
        averageGrade: 0.1,
        deliveredHomeworks: 0,
        missingHomeworks: 6,
        updated: 78963145287
      },
      {
        id: 14,
        photo: "../assets/img/linterna-verde.png",
        name: 'Celeritas',
        averageGrade: 2.8,
        deliveredHomeworks: 2,
        missingHomeworks: 4,
        updated: 888888888888
      },
      {
        id: 15,
        photo: "../assets/img/spiderman.png",
        name: 'Magneta',
        averageGrade: 2.5,
        deliveredHomeworks: 2,
        missingHomeworks: 4,
        updated: 999999999999
      },
      {
        id: 16,
        photo: "../assets/img/wolverine.png",
        name: 'RubberMan',
        averageGrade: 0,
        deliveredHomeworks: 0,
        missingHomeworks: 6,
        updated: 999999999991
      }
    ];
    return { students };
  }
}
