import './badge.scss';
export default function Badge(props){
    let badgeClass = props.size ?? 'badge';
    
    return(
        <div className={badgeClass}>{props.skill}</div>
    )
}