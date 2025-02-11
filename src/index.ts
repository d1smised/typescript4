import {Transport} from "./Transport";

const owner = new Transport.VehicleOwner(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 1, 1),
    Transport.DocumentType.Passport,
    "1234",
    "567890"
);

const car = new Transport.Sedan(
    "Toyota",
    "Camry",
    2020,
    "1HGBH41JXMN109186",
    "A123BC",
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Business
);

const bike = new Transport.SportBike(
    "Yamaha",
    "YZF-R1",
    2022,
    "JYARN23E2A0000001",
    "C789EF",
    owner,
    "Aluminum",
    true
);

const vehicleStorage = new Transport.Storage<Transport.Vehicle>();

// Добавление транспортных средств в хранилище
vehicleStorage.addVehicle(car);
vehicleStorage.addVehicle(bike);

// Вывод информации о владельце и транспортных средствах
owner.displayInfo();
car.displayInfo();
bike.displayInfo();

// Вывод информации о всех транспортных средствах в хранилище
vehicleStorage.getAllVehicles().forEach(vehicle => vehicle.displayInfo());