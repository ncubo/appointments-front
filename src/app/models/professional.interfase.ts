/**
 * Professional Interface
 * @id {number} id of Professional
 * @avatar {string}
 * @city {string}
 * @first_name {string} First Name
 * @last_name {string} Last Name
 * @services { Service[] } Service { aboutme, service, timetable }
 */
export interface IProfessional {
    id?: number;
    avatar: string;
    city: string; //City,
    first_name: string;
    last_name: string;
    services: Service[]
}

interface Service {
    aboutme: string,
    service: string,
    timetable: string
}