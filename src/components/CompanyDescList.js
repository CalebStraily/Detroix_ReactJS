import puzzleImg from "../images/puzzle.png";
import handImg from '../images/hand.png';
import mazeImg from '../images/maze.png';
import CompanyDescv2 from "./CompanyDescv2";

function CompanyDescList()
{
    const descriptions = 
    [
        {
            title: "SMART",
            image: puzzleImg,
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt quidem. Quam quibusdam eaque sed error. Ab, eligendi asperiores. Quam.",
        },
        {
            title: "STRONG",
            image: handImg,
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in quae possimus consequatur quibusdam, accusantium eligendi commodi est odit aliquam.",
        },
        {
            title: "STABLE",
            image: mazeImg,
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus reiciendis obcaecati tenetur accusamus quia? Illo magni maiores repellendus repudiandae?",
        },
    ];

    return (
        <div className="description-list">
            {descriptions.map((description, index) => (
                <CompanyDescv2
                    key={index}
                    title={description.title}
                    image={description.image}
                    body={description.body}
                />
            ))}
        </div>
    )
}

export default CompanyDescList;