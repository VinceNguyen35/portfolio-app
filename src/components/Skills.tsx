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
            <div className="languages">
                {
                    languages.map((item) => (
                        <h3>{item}</h3>
                    ))
                }
            </div>
            <div className="frameworks">
                {
                    frameworks.map((item) => (
                        <h3>{item}</h3>
                    ))
                }
            </div>
            <div className="other">
                {
                    other.map((item) => (
                        <h3>{item}</h3>
                    ))
                }
            </div>
        </section>
    );
}
 
export default Skills;