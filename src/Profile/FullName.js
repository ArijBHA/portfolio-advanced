// export default function FullName (){
    const fullName = (props) => {
       
        console.log(props);
    return(
       <div className="body">
        <div className="glowing-cube">
            <div className="top"></div>
            <div>
            <span style={{rotate: 0}} />
            <span style={{rotate: 1}} />
            <span style={{rotate: 2}} />
            <span style={{rotate: 3}} />
            </div>
        </div>
         
        <h3 style={{color:"gray", textAlign:"right"}} >  {props.firstName} {props.lastName}
        </h3>

        </div>
        

    )
}
export default fullName;