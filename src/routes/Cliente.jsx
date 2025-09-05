import { useForm } from 'react-hook-form'

const Cliente = () => {
  
  // Destruct -> Acessa propriedades de outro componente
  // useForm -> Facilita a criação e validação do formulário
  const {register, setValue, setFocus} = useForm();

  function buscarCep(e) {
    const cep = e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((dados) => {
      setValue("estado", dados.estado)
      setValue("cidade", dados.localidade)
      setValue("rua", dados.logradouro)
      setValue("bairro", dados.bairro)
      setFocus("numero")
    })
  }

  return (
    <section className='h-screen w-screen flex justify-center items-center'>
      <form className='w-80'>
        <fieldset className='border rounded-2xl p-4'>
          <legend className='ml-2 text-3xl'>Dados cliente</legend>
            <div className='flex flex-row mb-2 items-center gap-4 pb-2 border-b'>
              <label className='uppercase text-xl justify-self-start'>Cep</label>
              <input 
              className='text-xl border rounded-full pl-2 w-50'
              type="text" 
              {...register("cep")}
              onBlur={buscarCep}
              />
            </div>

            <div className='flex flex-row mb-2 items-center gap-4 pb-2 border-b'>
              <label className='uppercase text-xl justify-self-start'>Estado</label>
              <input 
              className='text-xl border rounded-full pl-2 w-50'
              type="text" 
              {...register("estado")}
              />
            </div>

            <div className='flex flex-row mb-2 items-center gap-4 pb-2 border-b'>
              <label className='uppercase text-xl justify-self-start'>Cidade</label>
              <input 
              className='text-xl border rounded-full pl-2 w-50'
              type="text" 
              {...register("cidade")}
              />
            </div>

            <div className='flex flex-row mb-2 items-center gap-4 pb-2 border-b'>
              <label className='uppercase text-xl justify-self-start'>Bairro</label>
              <input 
              className='text-xl border rounded-full pl-2 w-50'
              type="text" 
              {...register("bairro")}
              />
            </div>

            <div className='flex flex-row mb-2 items-center gap-4 pb-2 border-b'>
              <label className='uppercase text-xl justify-self-start'>Rua</label>
              <input 
              className='text-xl border rounded-full pl-2 w-50'
              type="text" 
              {...register("rua")}
              />
            </div>

            <div className='flex flex-row items-center gap-4 pb-2'>
              <label className='uppercase text-xl justify-self-start'>Número</label>
              <input 
              className='text-xl border rounded-full pl-2 w-50'
              type="text" 
              {...register("numero")}
              />
            </div>

        </fieldset>
      </form>
    </section>
  )
}

export default Cliente