const Skills = () => {
    const languages: string[] = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "SQL"
    ];

    const frameworks: string[] = [
        "React",
        "Redux",
        "Node.js",
        "Jest",
        "Sass",
        "MySQL",
        "MongoDB",
        "AWS"
    ];

    const other: string[] = [
        "Git",
        "Linux",
        "Embedded",
        "FPGA"
    ];

    return (
        <section className="skills">
            <h2>Tech Stack</h2>
            <h3>Technical Languages</h3>
                <div className="stack-container">
                    {
                        languages.map((language, key) => (
                            <div className="skills-container">
                                <div key={key} className="skills-image-container">
                                    <img src={`./${language}.svg`} alt={language} />
                                </div>
                                <div>
                                    {language}
                                </div>
                            </div>
                        ))
                    }
                </div>
            <h3>Frameworks</h3>
                <div className="stack-container">
                    {
                        frameworks.map((framework, key) => (
                            <div className="skills-container">
                                <div key={key} className="skills-image-container">
                                    <img src={`./${framework}.svg`} alt={framework} />
                                </div>
                                <div>
                                    {framework}
                                </div>
                            </div>
                        ))
                    }
                </div>
            <div className="frameworks">
            </div>
            <h3>Extra Technical Skills</h3>
                <div className="stack-container">
                    {
                        other.map((skill, key) => (
                            <div className="skills-container">
                                <div key={key} className="skills-image-container">
                                    <img src={`./${skill}.svg`} alt={skill} />
                                </div>
                                <div>
                                    {skill}
                                </div>
                            </div>
                        ))
                    }
                </div>
            <div className="other">
            </div>
        </section>
    );
}
 
export default Skills;