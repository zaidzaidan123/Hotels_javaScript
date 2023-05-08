class Hotel {
  #minFloor;
  #maxFloor;
  constructor(address, numberOfRooms, minFloor, maxFloor, rooms) {
    this.address = address;
    this.numberOfRooms = numberOfRooms;
    this.#minFloor = minFloor;
    this.#maxFloor = maxFloor;
    this.rooms = rooms;
  }
  printAdvertisement() {
    console.log(`Welcome to ${this.address} Hotel`);
  }

  listBookedRooms() {
    for (let index = 0; index < this.rooms.length; index++) {
      this.rooms[index].printRoom();
    }
  }
}
class Room {
  #isBooked;
  constructor(floorNum, roomNum, price, isBooked) {
    this.floorNum = floorNum;
    this.roomNum = roomNum;
    this.price = price;
    this.#isBooked = isBooked;
  }

  isBooked() {
    return this.#isBooked;
  }

  printRoom() {
    console.log(
      `floorNum = ${this.floorNum} , roomNum = ${this.roomNum} , price = ${
        this.price
      } , isBooked = ${this.#isBooked}`
    );
  }
  book() {
    this.#isBooked = true;
    return this.#isBooked;
  }
}
class RoomWithView extends Room {
  #isBooked;
  constructor(floorNum, roomNum, price, isBooked, numberOfBeds, view) {
    super(floorNum, roomNum, price, isBooked);
    this.view = view;
    this.numberOfBeds = numberOfBeds;
    this.#isBooked = isBooked;
  }

  printRoom() {
    console.log(
      `floorNum = ${this.floorNum} , roomNum = ${this.roomNum} , price = ${
        this.price
      } , isBooked = ${this.#isBooked} , numberOfBeds = ${
        this.numberOfBeds
      } , view = ${this.view}`
    );
  }
}
class SleepingRoom extends Room {
  #isBooked;
  constructor(floorNum, roomNum, price, isBooked, personCapacity) {
    super(floorNum, roomNum, price, isBooked);
    this.personCapacity = personCapacity;
    this.#isBooked = isBooked;
  }

  printRoom() {
    console.log(
      `floorNum = ${this.floorNum} , roomNum = ${this.roomNum} , price = ${
        this.price
      } , isBooked = ${this.#isBooked} , personCapacity = ${
        this.personCapacity
      } `
    );
  }
}

const r1 = new Room(2, 55, 200, false);
// r1.printRoom();
// console.log(r1.isBooked())
// console.log(r1.book())

const r2 = new SleepingRoom(3, 7, 250, false, 2);
// r2.printRoom();
// console.log(r2.isBooked())
// console.log(r2.book())

const r3 = new RoomWithView(3, 7, 250, false, 2, "Garden");
// r3.printRoom();
// console.log(r3.isBooked())
// console.log(r3.book())

const h1 = new Hotel("Ramallah", 10, 1, 10, [r1, r2, r3]);
// h1.printAdvertisement();
// h1.listBookedRooms();
