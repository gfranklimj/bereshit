import Numbers from "./Number";

const data = [
  {
    title: "Created projects",
    defaultText: "10+",
    options: {
      start: 0,
      end: 10,
      delay: 500,
      duration: 2,
      suffix: "+",
    },
  },
  {
    title: "Projects",
    defaultText: "120+",
    options: {
      start: 0,
      end: 120,
      delay: 500,
      duration: 2,
      suffix: "+",
    },
  },
  {
    title: "Happy users",
    defaultText: "1000+",
    options: {
      start: 0,
      end: 450,
      delay: 500,
      duration: 2,
      suffix: "+",
    },
  },
  {
    title: "Years",
    defaultText: "5+",
    options: {
      start: 0,
      end: 5,
      delay: 500,
      duration: 2,
      suffix: "+",
    },
  },
];

export default function ByNumbers() {
  return (
    <>
      {data.map((item, idx) => (
        <Numbers key={idx} item={item} id={idx} />
      ))}
    </>
  );
}
