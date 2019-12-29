import { create } from "domain";

export type Education = {
  name: string;
  startDate: Date;
  endDate: Date;
  result: string;
};

const Educations: Education[] = [
  {
    name: "Service",
    startDate: new Date(2019, 11, 7, 10, 0),
    endDate: new Date(2019, 11, 7, 12, 0),
    result: "passed"
  },
  {
    name: "Basic Cooking",
    startDate: new Date(2019, 11, 9, 10, 0),
    endDate: new Date(2019, 11, 9, 12, 0),
    result: "passed"
  }
];

enum WeekDay {
  MON = "월",
  TUE = "화",
  WED = "수",
  THU = "목",
  FRI = "금",
  SAT = "토",
  SUN = "일"
}

export type ContractInfo = {
  startDate: Date;
  endDate: Date;
  duration: number;
  workTime: {
    startDate: Date;
    endDate: Date;
  };
  workDay: WeekDay[];
  legalHoliday: WeekDay;
  HourlyPay: number;
  RiderPay: number;
  healthCertificate: {
    number: number;
    issueDate: Date;
    updateDate: Date;
  };
  license: {
    number: number;
    issueDate: Date;
    updateDate: Date;
  };
  accountHolder: string;
  bank: string;
  accountNumber: string;
};

const ContractInfoData: ContractInfo = {
  startDate: new Date(2018, 12, 10, 10, 0),
  endDate: new Date(2018, 12, 20, 11, 0),
  duration: 8,
  workTime: {
    startDate: new Date(2019, 12, 23, 9, 30),
    endDate: new Date(2019, 12, 23, 18, 0)
  },
  workDay: [WeekDay.MON, WeekDay.TUE, WeekDay.FRI],
  legalHoliday: WeekDay.SAT,
  HourlyPay: 8350,
  RiderPay: 8350,
  healthCertificate: {
    number: 1234567,
    issueDate: new Date(),
    updateDate: new Date()
  },
  license: {
    number: 123456,
    issueDate: new Date(),
    updateDate: new Date()
  },
  accountHolder: "김희선",
  bank: "신한은행",
  accountNumber: "110-123-1234"
};

export type profileInfo = {
  name: string;
  wideArea: string;
  smallArea: string;
  store: string;
  position: string;
  joinDate: Date;
  resignationDate: Date;
};

const profileInfoData: profileInfo = {
  name: "김희선",
  wideArea: "서울",
  smallArea: "강남",
  store: "강남본점",
  position: "crew",
  joinDate: new Date(),
  resignationDate: new Date()
};

const employeeList: Partial<profileInfo>[] = [
  {
    name: "김희선",
    smallArea: "강남",
    position: "crew"
  },
  {
    name: "김우리",
    smallArea: "강남",
    position: "crew"
  },
  {
    name: "김하나",
    smallArea: "강남",
    position: "crew"
  },
  {
    name: "김당근",
    smallArea: "강남",
    position: "crew"
  }
];

export const createStore = () => {
  const store = {
    get allEducations() {
      return Educations;
    },

    get contractInfo() {
      return ContractInfoData;
    },

    get profileInfo() {
      return profileInfoData;
    },

    get employeeInfoList() {
      console.log("sssss", employeeList);
      return employeeList;
    }
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;
