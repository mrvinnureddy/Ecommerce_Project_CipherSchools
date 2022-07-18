const login = ()=>{
    return(

<div style={{"fontFamily":"Calibri, Helvetica, sans-serif","backgroundColor":"pink"}}>
  <center>
    {" "}
    <h1> User Login</h1>{" "}
  </center>
  <form style={{"border":"3px solid #f1f1f1"}}>
    <div style={{"padding":"25px","backgroundColor":"lightblue"}}>
      <label>Username : </label>
      <input style={{"width":"100%","margin":"8px 0","padding":"12px 20px","display":"inline-block","border":"2px solid green","boxSizing":"border-box"}}
        type="text"
        placeholder="Enter Username"
        name="username"
        required=""
      />
      <label>Password : </label>
      <input style={{"width":"100%","margin":"8px 0","padding":"12px 20px","display":"inline-block","border":"2px solid green","boxSizing":"border-box"}}
        type="password"
        placeholder="Enter Password"
        name="password"
        required=""
      />
      <button style={{"backgroundColor":"#4CAF50","width":"100%","color":"orange","padding":"15px","margin":"10px 0px","border":"none","cursor":"pointer"}} type="submit">Login</button>


      <input type="checkbox" defaultChecked="checked" /> Remember me
      <button style={{"width":"auto","padding":"10px 18px","margin":"10px 5px","button_hover":{"opacity":"0.7"},"backgroundColor":"#4CAF50","color":"orange","padding":"15px","margin":"10px 0px","border":"none","cursor":"pointer"}} type="button" className="cancelbtn">
        {" "}
        Cancel
      </button>
      Forgot <a href="#"> password? </a>
    </div>{" "}
  </form>
</div>



    )
}

export default login;