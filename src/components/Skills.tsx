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
        "Node",
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
        <section>
            <h2>Tech Stack</h2>
            <h3>Technical Languages</h3>
            <div className="languages">
                {
                    languages.map((item) => (
                        <span>{item} </span>
                    ))
                }
            </div>
            <h3>Frameworks</h3>
            <div className="frameworks">
                {
                    frameworks.map((item) => (
                        <span>{item} </span>
                    ))
                }
            </div>
            <h3>Extra Technical Skills</h3>
            <div className="other">
                {
                    other.map((item) => (
                        <span>{item} </span>
                    ))
                }
            </div>
        </section>
    );
}
 
export default Skills;