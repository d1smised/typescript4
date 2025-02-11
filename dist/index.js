"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transport_1 = require("./Transport");
const owner = new Transport_1.Transport.VehicleOwner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), Transport_1.Transport.DocumentType.Passport, "1234", "567890");
const car = new Transport_1.Transport.Sedan("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner, Transport_1.Transport.BodyType.Sedan, Transport_1.Transport.CarClass.Business);
const bike = new Transport_1.Transport.SportBike("Yamaha", "YZF-R1", 2022, "JYARN23E2A0000001", "C789EF", owner, "Aluminum", true);
const vehicleStorage = new Transport_1.Transport.Storage();
// Добавление транспортных средств в хранилище
vehicleStorage.addVehicle(car);
vehicleStorage.addVehicle(bike);
// Вывод информации о владельце и транспортных средствах
owner.displayInfo();
car.displayInfo();
bike.displayInfo();
// Вывод информации о всех транспортных средствах в хранилище
vehicleStorage.getAllVehicles().forEach(vehicle => vehicle.displayInfo());
