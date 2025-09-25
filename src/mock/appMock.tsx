import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { SchedulerData, SchedulerProjectData } from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

const secondsInWorkDay = 28800;

export const mockedOnRangeChange = (range: ParsedDatesRange, data: SchedulerData) => {
  console.log("Mocked on range change has been triggered. New range: ", range, data);
};

const getRandomWords = (amount?: number) =>
  amount ? faker.random.words(amount) : faker.random.word();

const getRandomDates = (year: number) => {
  const startDate = faker.date.between(new Date(year, 0, 1), new Date(year + 1, 0, 1));
  const endDate = faker.date.between(
    startDate,
    new Date(year + Math.ceil(Math.random() * 4), 0, 1)
  );

  return { startDate, endDate };
};

export const generateProjects = (
  years: number,
  maxProjectsPerYear: number,
  amountOfDscWords = 5,
  title: string
): SchedulerProjectData[] => {
  const startYear = dayjs()
    .subtract(Math.floor(years / 2), "years")
    .get("year");

  const endYear = dayjs()
    .add(Math.floor(years / 2), "years")
    .get("year");

  const data = [];
  const bgColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 200
  )},${Math.ceil(Math.random() * 200)})`;

  for (let yearIndex = startYear; yearIndex <= endYear; yearIndex++) {
    const projectsPerYear = Math.ceil(Math.random() * maxProjectsPerYear);

    for (let projectIndex = 0; projectIndex < projectsPerYear; projectIndex++) {
      const { startDate, endDate } = getRandomDates(yearIndex);
      data.push({
        id: faker.datatype.uuid(),
        startDate,
        endDate,
        occupancy: Math.ceil(Math.random() * secondsInWorkDay),
        title,
        subtitle: getRandomWords(),
        description: getRandomWords(amountOfDscWords),
        bgColor
      });
    }
  }
  return data;
};

export const createMockData = (
  amountOfPeople: number,
  years: number,
  maxProjectsPerYear: number,
  amountOfDscWords = 5
): SchedulerData => {
  const schedulerData: SchedulerData = [];
  for (let i = 0; i < amountOfPeople; i++) {
    const title = getRandomWords(2);
    const data: SchedulerProjectData[] = generateProjects(
      years,
      maxProjectsPerYear,
      amountOfDscWords,
      title
    );

    const item = {
      id: faker.datatype.uuid(),
      label: {
        icon: "https://picsum.photos/24",
        title,
        subtitle: (
          <div style={{ width: "100%", display: "flex", gap: "4px", margin: "4px" }}>
            <div style={{ color: "red", fontSize: "12px" }}>Подпись: да</div>
            <div style={{ color: "red", fontSize: "12px" }}>Дата приема: 12.03.2025</div>
            <div style={{ color: "red", fontSize: "12px" }}>Дата удаление: 25.10.2025</div>
          </div>
        )
      },
      data
    };
    schedulerData.push(item);
  }
  return schedulerData;
};
