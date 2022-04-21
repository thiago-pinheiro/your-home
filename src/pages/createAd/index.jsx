import { Button, NativeSelect, TextField, InputLabel } from "@mui/material";
import "./style.css";

function CreateAd() {
  return (
    <div className="containerAccount">
      <div className="containerColor">
        <h2>Criar anúncio</h2>
        <div className="containerTextField">
          <TextField label="Titulo:" variant="standard" size="small" />
          <br></br>
          <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
          <NativeSelect defaultValue={0}>
            <option value={0}></option>
            <option value={1}>Casa</option>
            <option value={2}>Refrigeração</option>
          </NativeSelect>
        </div>
        <div className="containerButton">
          <Button variant="contained">Seguir</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateAd;
