import React from "react"

class NySpelare extends React.Component {


    state = {
      spelare: "",
      position: "",
      gradering: "Okej"
    };


    //kan hantera flera text-fält, tack tillägget name="spelare" nedan
    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    handleSubmit = e => {
      e.preventDefault()
      if (this.state.spelare.trim() == "") {
        alert("Ange spelarens namn")
        return
      }
      if (this.state.position == "" || this.state.position == "Nada") {
        alert("Ange spelarens position")
        return
      }
      this.props.addSpelareProps(this.state.spelare, this.state.position, this.state.gradering)

      //cleara state
      this.setState({
        spelare: "",
        gradering: "Okej"
      })
    }



    render() {
      return (
        <form onSubmit={this.handleSubmit} className="form-container">
          <label className="form-header"> ---------- Lägg till ny spelare -------- </label><br></br>
          <label>Spelarens namn:</label><br></br>
          <input
            type="text"
            className="input-text-x"
            value={this.state.spelare}
            name="spelare"
            onChange={this.onChange}
          />
          <br></br>
          <label>Spelarens position:</label><br></br>
          <select onChange={this.onChange} id="positioner" name="position">
            <option value="Nada">---</option>
            <option value="Målvakt">Målvakt</option>
            <option value="Vänsterback">Vänsterback</option>
            <option value="Högerback">Högerback</option>
            <option value="Mittback">Mittback</option>
            <option value="Vänster mittfältare">Vänster mittfältare</option>
            <option value="Höger mittfältare">Höger mittfältare</option>
            <option value="Vänsterytter">Vänsterytter</option>
            <option value="Högerytter">Högerytter</option>
            <option value="Libro">Libro</option>
          </select>
          <br></br>
          <label>Gradering:</label><br></br>
          <input onChange={this.onChange} type="radio" id="ok" name="gradering" value="Okej" checked />
          <label>Okej</label><br></br>
          <input onChange={this.onChange} type="radio" id="lovande" name="gradering" value="Lovande" />
          <label>Lovande</label><br></br>
          <input onChange={this.onChange} type="radio" id="enast" name="gradering" value="Enastående!" />
          <label>Enastående!  </label>

          <button className="input-submit-x">Lägg till</button>
        </form>
      )
    }
  }

export default NySpelare