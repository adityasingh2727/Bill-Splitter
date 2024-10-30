import { BillForm } from './BillForm'
import { Friends } from './Friends'
import Button from '../../../shared/Widgets/Button'


export function Profile({splitBill,friendList,user}) {
const flex={
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
}

const myStyle={
    borderRadius:"50%",
    border:"3px solid black",
    marginTop:"20px",
    position:"relative",
     width:"180px",
     height:"180px",
     overflow:"hidden"
}

const img={
    width:"100%",
    height:"100%"
}

const textAlign ={
  textAlign:"center"
}

return (
    <div>
        <div className="flex" style={flex}>
        <div className="profile-pic" style={myStyle}>
            <img style={img} src={user.userImg} alt="" />
        </div>
        </div>
        <div className="user-info" style={textAlign}>
            <h3>{user.name}</h3>
          <h6><i>{user.userId}</i></h6>
        </div>
        <div className="add-bill row">
         <BillForm userId={user._id}></BillForm>
        </div>
        <div className="add-friend">
          
          <Friends user={user} userFriendList={friendList}></Friends>
        </div>
    </div>
  )
}
