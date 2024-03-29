import "./list.css";


const List = (props) => {
    const {isProject} = props;
    // const {isLast} = props;

    const isItemed = props.description.substring(0,5) === "ITEM:";
    let bulletItems = [];
    if (isItemed) {
        bulletItems =  props.description.split('ITEM:').filter(item => item.trim() !== '');

    }

    return (
        <div class="item-container">
            <div class="item">
                <div style={{ borderTop: '3px red' }}></div>
                <img src={props.img} alt={props.name} class={isProject? 'project' : ''}></img>

                <div>
                    <div class="item-title"> {props.title} </div>
                    {isProject && <div class ="item-date"> {props.subtitle} </div> }
                    {!isProject && <div class ="item-subtitle"> {props.subtitle} </div> }
                    
                    <div class ="item-date"> {props.date} </div>

                    <br/>
                    <div class ="item-description">
                        {props.description !== "" && <br/>}
                        {isItemed && 
                            bulletItems.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })
                        }
                        {!isItemed ? 
                            props.description.startsWith("https") ? 
                                <a 
                                    href={props.description}
                                    style={{padding: '0 0 0', textDecoration:'underline'}}>
                                    Verification Link
                                </a>

                                : props.description
                            : null
                        }
                    </div>

                    <br/>
                    <div class ="item-description">
                        {props.skills !== "" && 
                            <>
                                <b>Skills: </b>
                                {props.skills}
                            </>
                        }
                    </div>

                    {isProject && <p class="github">
                            <a 
                                class="icon-text github"
                                href={props.github} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <i class='fa fa-github'></i>
                                {"  "} GitHub Source Code {"  "}
                            </a> 
                        </p>
                    }
                {!isProject && <div><br/></div>}

                </div>

            </div>


        </div>
    );
}

export default List;
