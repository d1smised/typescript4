"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let DocumentType;
    (function (DocumentType) {
        DocumentType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocumentType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        DocumentType["IDCard"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
    })(DocumentType = Transport.DocumentType || (Transport.DocumentType = {}));
    // Класс, реализующий интерфейс Владелец
    class VehicleOwner {
        constructor(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }
        // Геттеры
        get lastName() { return this._lastName; }
        get firstName() { return this._firstName; }
        get middleName() { return this._middleName; }
        get birthDate() { return this._birthDate; }
        get documentType() { return this._documentType; }
        get documentSeries() { return this._documentSeries; }
        get documentNumber() { return this._documentNumber; }
        // Метод для вывода информации о владельце
        displayInfo() {
            console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
            console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
            console.log(`Тип документа: ${this._documentType}`);
            console.log(`Серия документа: ${this._documentSeries}`);
            console.log(`Номер документа: ${this._documentNumber}`);
        }
    }
    Transport.VehicleOwner = VehicleOwner;
    // Перечисление для типа кузова
    let BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        BodyType["Truck"] = "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    // Перечисление для класса автомобиля
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    // Класс, реализующий интерфейс Автомобиль
    class Sedan {
        constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        // Геттеры
        get brand() { return this._brand; }
        get model() { return this._model; }
        get year() { return this._year; }
        get vin() { return this._vin; }
        get registrationNumber() { return this._registrationNumber; }
        get owner() { return this._owner; }
        get bodyType() { return this._bodyType; }
        get carClass() { return this._carClass; }
        // Метод для вывода информации о транспортном средстве
        displayInfo() {
            console.log(`Марка: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._year}`);
            console.log(`VIN-номер: ${this._vin}`);
            console.log(`Регистрационный номер: ${this._registrationNumber}`);
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`);
        }
    }
    Transport.Sedan = Sedan;
    // Класс, реализующий интерфейс Мотоцикл
    class SportBike {
        constructor(brand, model, year, vin, registrationNumber, owner, frameType, isSport) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._frameType = frameType;
            this._isSport = isSport;
        }
        get brand() { return this._brand; }
        get model() { return this._model; }
        get year() { return this._year; }
        get vin() { return this._vin; }
        get registrationNumber() { return this._registrationNumber; }
        get owner() { return this._owner; }
        get frameType() { return this._frameType; }
        get isSport() { return this._isSport; }
        displayInfo() {
            console.log(`Марка: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._year}`);
            console.log(`VIN-номер: ${this._vin}`);
            console.log(`Регистрационный номер: ${this._registrationNumber}`);
            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Для спорта: ${this._isSport}`);
        }
    }
    Transport.SportBike = SportBike;
    // Класс, реализующий интерфейс Хранилище
    class Storage {
        constructor() {
            this._creationDate = new Date();
            this.vehicles = [];
        }
        // Свойство для получения даты создания хранилища
        get creationDate() { return this._creationDate; }
        // Метод для получения всех транспортных средств
        getAllVehicles() {
            return this.vehicles;
        }
        // Метод для добавления транспортного средства в хранилище
        addVehicle(vehicle) {
            this.vehicles.push(vehicle);
        }
    }
    Transport.Storage = Storage;
})(Transport || (exports.Transport = Transport = {}));
