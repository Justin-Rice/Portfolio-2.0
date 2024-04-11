import './badge.scss';
export default function Badge(props){
    console.log(props);
    let badgeClass = props.size ?? 'badge';
    
    return(
        <div className={badgeClass}>{props.skill}</div>
    )
}