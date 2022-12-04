import React from "react"

class SpelareITabell extends React.Component {

  state = {
    editing: false,
    btnText: "Ändra"

  }

  handleEditing = () => {
    if (this.state.editing) {
      this.setState({
        editing: false,
        btnText: "Ändra"
      })
    } else {
      this.setState({
        editing: true,
        btnText: "Spara"
      })
    }
  }

  handleUpdatedDone = event => {
    //console.log(event.key)
    if (event.key === "Enter") {
      this.setState({ editing: false, btnText: "Ändra" })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    //"destructure" the spelare and get variables from it
    const { position, id, spelare, gradering } = this.props.spelare


    //hantera edit-fältet
    let viewMode = {}
    let editMode = {}
    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }


    return (
      <tr>
        <td className="item">
          <div style={viewMode}>
            <span style={false ? completedStyle : null}>
              {spelare}
            </span>
          </div>
          <input
            type="text"
            style={editMode}
            className="textInput"
            value={spelare}
            onChange={e => {
              this.props.setUpdate(e.target.value, id)
            }}
            onKeyDown={this.handleUpdatedDone}
          />
        </td>
        <td>
          <div style={viewMode}>
            <span style={false ? completedStyle : null}>
              {position}
            </span>
          </div>

          <select style={editMode}
            className="textInput"
            value={position}
            onChange={e => {
              this.props.setUpdatePos(e.target.value, id)
            }}>
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

        </td>
        <td>
          <div style={viewMode}>
            <span style={false ? completedStyle : null}>
              {gradering}
            </span>
          </div>

          <select style={editMode}
            className="textInput"
            value={gradering}
            onChange={e => {
              this.props.setUpdateGrad(e.target.value, id)
            }}>
            <option value="Okej">Okej</option>
            <option value="Lovande">Lovande</option>
            <option value="Enastående!">Enastående</option>
          </select>
        </td>

        <td>
          <button style={{ fontWeight: this.state.editing ? "bold" : "normal" }} onClick={this.handleEditing} className="changebutton"> {this.state.btnText}</button>
          <button onClick={() => this.props.deleteSpelareProps(id)} className="delbutton"> Ta bort </button>
        </td>
      </tr>
    )
  }
}

export default SpelareITabell
