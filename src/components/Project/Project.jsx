import { useState } from "react";
import Card from "../Card";
import logo from "../../assets/logo.png";
import { serviceData } from "../../constants";
import Button from "../Button";

const ProjectDrawer = ({ isOpen, onClose, selectedProject }) => {

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-80 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] bg-white h-full p-5 shadow-lg absolute right-0 top-0 flex flex-col justify-between">
        <div>
          <h2 className="absolute top-2 w-full right-0 text-center shadow-md p-3 md:text-[24px] font-bold">
          Project Details
          </h2>

          {selectedProject ? (
            <div className="pt-11">
              <div>
                <img
                  src={selectedProject.image || logo}
                  alt={selectedProject.titlee}
                  className="w-full object-cover rounded-3xl mb-4"
                />
                <h2 className="text-xl font-bold">{selectedProject.title}</h2>
                <h3>{selectedProject.text}</h3>
              </div>
            </div>
          ) : (
            <p>No project selected.</p>
          )}
        </div>

        {/* Buttons placed at the bottom */}
        <div className="flex justify-between mt-auto pt-4">
          <Button onClick={onClose} className="bg-red-400">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Project = ({ ministry, ministryProject, isLoading }) => {
  console.log(ministry);
  console.log(ministryProject);

  const serviceData = (ministry?.projects?.length > 0 ? ministry.projects : ministryProject?.projects) || [];
  console.log(serviceData);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSeeMoreClick = (project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <ProjectDrawer isOpen={drawerOpen} onClose={closeDrawer} selectedProject={selectedProject} />

      <div className="flex flex-wrap gap-10 mb-10 bg-white rounded-3xl px-10 items-center justify-center py-10">
        {serviceData.length > 0 ? (
          serviceData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              light={item.light}
              buttonProps={{
                buttonText: "See More",
                onClick: () => handleSeeMoreClick(item),
              }}
            />
          ))
        ) : (
          <p className="text-center font-bold" >No Project available at the moment.</p>
        )}
      </div>
    </div>
  );
};
