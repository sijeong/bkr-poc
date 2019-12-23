import { create } from "domain";

export type Education = {
    name: string;
    startDate: Date;
    endDate: Date;
    result: string;
}

const Educations: Education[] = [
    {
        name: 'Service',
        startDate: new Date(2019, 11, 7, 10, 0),
        endDate: new Date(2019, 11, 7, 12, 0),
        result: 'passed'
    },
    {
        name: 'Basic Cooking',
        startDate: new Date(2019, 11, 9, 10, 0),
        endDate: new Date(2019, 11, 9, 12, 0),
        result: 'passed'
    }
];

export const createStore = () => {
    const store = {
        get allEducations() {
            return Educations;
        }
    };

    return store;
}

export type TStore = ReturnType<typeof createStore>;
