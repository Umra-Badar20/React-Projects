function Addtodos(){
    return <div className="row text-left AddTodos">
    <div className="col-6 ">
      <input type="text" placeholder="Enter To Do Here" />
    </div>

    <div className="col-4 ">
      <input type="date" />
    </div>

    <div className="col-2">
      <button type="button" className="btn btn-success">
        Add
      </button>
    </div>
  </div>
}
export default Addtodos