import next from "next";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3322/api/get-products", {
      method: "GET",
      next: { revalidate: 0 },
    });

    return res.json();
  } catch (error) {
    console.error();
  }
};

const page = async () => {
  const data = await getData();

  return (
    <div className="">
      {data?.data?.map((props: any) => {
        return (
          <div key={props._id}>
            <div>{props?.title}</div>
            <img alt="image" src={props?.image} width={100} height={100} />
          </div>
        );
      })}
    </div>
  );
};

export default page;
