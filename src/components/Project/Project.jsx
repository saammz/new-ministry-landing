import { serviceData } from "../../constants"
import Card from "../Card";

export const Project = () => {
    return (
      <div className="flex flex-wrap gap-10 mb-10 bg-white rounded-3xl px-10 items-center justify-center py-10 ">
        {serviceData.length > 0 ? (
          serviceData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              light={item.light} 
            />
          ))
        ) : (
          <p>No Project available at the Moment.</p>
        )}
      </div>
    );
  };