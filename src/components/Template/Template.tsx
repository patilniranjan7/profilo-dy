import { Row } from "antd";

import { Layout, Space } from 'antd';
import Section from "../layout/Section";
import { userData } from '../../constant/userData'
import { useEffect, useState } from "react";

const { Header, Footer, Sider, Content } = Layout;
export default function Template() {
    const sectionData = ['about', 'experience', "education", 'skills', 'achivement'];
    const [selectedSection, setSelectedSection] = useState(sectionData[0])

    useEffect(() => {
        document.title = userData.firstName + ' Profilo'
        const smoothScroll = (event: any) => {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        };

        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach((link) => {
            link.addEventListener('click', smoothScroll);
        });

        return () => {
            anchorLinks.forEach((link) => {
                link.removeEventListener('click', smoothScroll);
            });
        };
    }, []);
    return (
        <div className="flex flex-row w-full">
            <nav className="w-1/5 bg-orange-400 flex flex-col justify-center items-center">
                <img src={imgURL} className="w-[60%] rounded-full" />
                <div className="flex flex-col mt-8">
                    {
                        sectionData.map((id, index) => (
                            <a href={`#${id}`} className={`uppercase m-1 text-center text-white ${selectedSection === id ? 'opacity-100' : 'opacity-50'}`} onClick={() => { setSelectedSection(id) }}>
                                {id}
                            </a>
                        )
                        )}
                </div>
            </nav>
            <div className="w-4/5 h-screen overflow-auto text-black bg-white">
                <Section id="about">
                    <h1 className="text-[54px] font-bold text-gray-800">{userData?.firstName}
                        <span className="text-orange-400"> {userData?.lastName}</span>
                    </h1>
                    <div className="text-gray-500 mb-8">{userData?.address}
                        <a href={userData?.email}> {userData?.email}</a>
                    </div>
                    <p className="mb-5">{userData?.about}</p>
                    <ul className="list-inline list-social-icons mb-0">
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x" />
                                    <i className="fa fa-facebook fa-stack-1x fa-inverse" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </Section>
                <Section id="experience">
                    <h2 className="text-[48px] font-bold text-gray-800 mb-6 capitalize">EXPERIENCE</h2>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        {(userData.experience).map(({ role, name, date, desc }) =>
                            <div className="resume-content mr-auto mb-8">
                                <div className="flex justify-between">
                                    <h3 className="text-[1.5rem] font-bold text-gray-800 capitalize">{role}</h3>
                                    <span className="text-orange-600">{date}</span>
                                </div>
                                <div className="subheading mb-3 opacity-70">{name}</div>
                                <p className="opacity-50">{desc}</p>
                            </div>
                        )}
                    </div>
                </Section>
                <Section id="education">
                    <div className="my-auto">
                        <h2 className="text-[48px] font-bold text-gray-800 mb-8 capitalize">Education</h2>
                        {(userData.education || []).map(({ branch, name, date, mark, desc }) =>
                            <div className="resume-item d-flex flex-column flex-md-row mb-6">
                                <div className="resume-content mr-auto relative">
                                    <div className="flex justify-between">
                                        <h3 className="text-[28px] font-bold text-gray-700">{name}</h3>
                                        <span className="text-orange-600">{date}</span>
                                    </div>
                                    <div className="text-[22px] mb-3 opacity-50">{branch}</div>
                                    <div className="opacity-50 text-[18px]">{desc}</div>
                                    <p className="opacity-50 text-[18px]">{mark}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Section>
                <Section id="skills">
                    <div className="my-auto">
                        <h2 className="mb-8 text-[48px] ">Skills</h2>
                        <div className="subheading mb-8">
                            <h4 className="mb-4 text-[24px] opacity-70">ROGRAMMING LANGUAGES & TOOLS</h4>
                            <div className="flex flex-wrap -mx-2">
                                {(userData.skills || []).map((skill) =>
                                    <span className="mb-4 mr-4 bg-orange-300 text-white p-4 rounded">{skill}</span>
                                )}
                            </div>
                        </div>

                        <div className="subheading mb-1 text-[24px] opacity-70">Workflow</div>
                        <ul className="fa-ul mb-0 opacity-50 text-[18px]">
                            <li>
                                <i className="fa-li fa fa-check mb-1" />
                                Created projects from zero to hero.</li>
                            <li>
                                <i className="fa-li fa fa-check mb-1" />
                                Mobile-First, Responsive Design.</li>
                            <li>
                                <i className="fa-li fa fa-check mb-1" />
                                Cross Browser Testing &amp; Debugging.</li>
                            <li>
                                <i className="fa-li fa fa-check mb-1" />
                                Handled Team & Project.</li>
                            <li>
                                <i className="fa-li fa fa-check mb-1" />
                                Agile Development &amp; Scrum</li>
                        </ul>
                    </div>
                </Section>
                <Section id="achivement">
                    <div className="my-auto">
                        <h2 className="mb-8 text-[48px] ">Awards &amp; Certifications</h2>
                        <ol className="fa-ul mb-0">
                            {(userData?.achivement || []).map((info, key) =>
                                <li>
                                    <b>{key+1}.</b> {info}
                                </li>
                            )}
                        </ol>
                    </div>
                </Section>
            </div>
        </div>
    )
}


const imgURL = 'https://media.licdn.com/dms/image/D4D03AQFFavuk_zQ7hA/profile-displayphoto-shrink_800_800/0/1689916712995?e=1695859200&v=beta&t=bOGam8y1b8P81h7A6dUNWxUPjKSmjfxgsXs7novIZ_o'