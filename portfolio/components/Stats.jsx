"use client"

import CountUp from "react-countup"

const stats =[
    {
        num: 7,
        text: "Internships Completed"
    },
    {
        num: 2,
        text: "Research Paper Accepted"
    },
    {
        num: 10,
        text: "Projects Completed"
    },
    {
        num: 15,
        text: "Technologies Mastered"
    },
    

]
const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) =>{
                    return(
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp  end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}`}>
                                {item.text}
                            </p>
                        </div>
                    )

                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
