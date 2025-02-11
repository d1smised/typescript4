export namespace Transport {
    export enum DocumentType {
        Passport = "Паспорт",
        DriverLicense = "Водительское удостоверение",
        IDCard = "Удостоверение личности"
    }

    // Интерфейс Владелец
    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        documentType: DocumentType;
        documentSeries: string;
        documentNumber: string;
        displayInfo(): void;
    }

    // Интерфейс Транспортное средство
    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        displayInfo(): void;
    }

    // Класс, реализующий интерфейс Владелец
    export class VehicleOwner implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _middleName: string;
        private _birthDate: Date;
        private _documentType: DocumentType;
        private _documentSeries: string;
        private _documentNumber: string;

        constructor(
            lastName: string,
            firstName: string,
            middleName: string,
            birthDate: Date,
            documentType: DocumentType,
            documentSeries: string,
            documentNumber: string
        ) {
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
        displayInfo(): void {
            console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
            console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
            console.log(`Тип документа: ${this._documentType}`);
            console.log(`Серия документа: ${this._documentSeries}`);
            console.log(`Номер документа: ${this._documentNumber}`);
        }
    }

    // Интерфейс Автомобиль
    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }

    // Перечисление для типа кузова
    export enum BodyType {
        Sedan = "Седан",
        Coupe = "Купе",
        Hatchback = "Хэтчбек",
        SUV = "Внедорожник",
        Truck = "Грузовик"
    }

    // Перечисление для класса автомобиля
    export enum CarClass {
        Economy = "Эконом",
        Business = "Бизнес",
        Luxury = "Люкс"
    }

    // Класс, реализующий интерфейс Автомобиль
    export class Sedan implements Car {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;
        private _bodyType: BodyType;
        private _carClass: CarClass;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            bodyType: BodyType,
            carClass: CarClass
        ) {
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
        displayInfo(): void {
            console.log(`Марка: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._year}`);
            console.log(`VIN-номер: ${this._vin}`);
            console.log(`Регистрационный номер: ${this._registrationNumber}`);
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`);
        }
    }

    // Интерфейс Мотоцикл
    export interface Motorbike extends Vehicle {
        frameType: string;
        isSport: boolean;
    }

    // Класс, реализующий интерфейс Мотоцикл
    export class SportBike implements Motorbike {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;
        private _frameType: string;
        private _isSport: boolean;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            frameType: string,
            isSport: boolean
        ) {
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

        displayInfo(): void {
            console.log(`Марка: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._year}`);
            console.log(`VIN-номер: ${this._vin}`);
            console.log(`Регистрационный номер: ${this._registrationNumber}`);
            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Для спорта: ${this._isSport}`);
        }
    }

    // Интерфейс Хранилище
    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }

    // Класс, реализующий интерфейс Хранилище
    export class Storage<T extends Vehicle> implements VehicleStorage<T> {
        public vehicles: T[];
        private _creationDate: Date;

        constructor() {
            this._creationDate = new Date();
            this.vehicles = [];
        }

        // Свойство для получения даты создания хранилища
        get creationDate() { return this._creationDate; }

        // Метод для получения всех транспортных средств
        getAllVehicles(): T[] {
            return this.vehicles;
        }

        // Метод для добавления транспортного средства в хранилище
        addVehicle(vehicle: T): void {
            this.vehicles.push(vehicle);
        }
    }
}