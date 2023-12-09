import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className? : string;
}

const Section: React.FC<SectionProps> = ({ id = '', children, className='' }) => {
  return (
    <section id={id} className={`${className} h-screen flex flex-col justify-center mx-8`}>
      {children}
    </section>
  );
};

export default Section;
