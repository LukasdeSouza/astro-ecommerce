interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div className="form-group">
        <label>Endereço</label>
        <input type="text" className="form-control" placeholder="Rua, número" />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>Cidade</label>
            <input type="text" className="form-control" placeholder="Digite sua Cidade city" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Estado</label>
            <input type="text" className="form-control" placeholder="Digite seu Estado" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>CEP</label>
            <input type="text" className="form-control" placeholder="Digite seu CEP" />
          </div>
        </div>
      </div>
    </>
  );
}