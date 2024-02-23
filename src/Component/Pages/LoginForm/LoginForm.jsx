import "./LoginForm.css";

function LoginForm() {
    return(
        <div className="parent">
        <div className="Form">
            <form>
                <label>نام*</label><input type="text" />

                  <label>نام خانوادگی*</label><input type="text" />

                    <label>شماره همراه*</label><input type="number" />

                <label>ایمیل*</label><input type="text" />
             
            </form>
        </div>
        </div>
    )
    
}

export default LoginForm