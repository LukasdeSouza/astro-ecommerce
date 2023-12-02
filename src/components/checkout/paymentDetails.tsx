export default function OrderSummary() {
  return (
    <>
      <div className="form-group">
        <label>Número de Cartão</label>
        <input type="text" className="form-control" placeholder="Número do seu cartão" />
      </div>
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <label>Data de Expiração (MM/AAAA)</label>
            <input type="text" className="form-control" placeholder="Digite a data" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>CVC</label>
            <input type="text" className="form-control" placeholder="Coloque os 3 Dígitos" />
          </div>
        </div>
      </div>
    </>
  );
}