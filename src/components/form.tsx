// import { component$, useStyles$, useStore } from '@builder.io/qwik';
import { component$, QwikSubmitEvent, useStyles$ } from '@builder.io/qwik';


// export function handleName(e: Event, data: any) {
//     if ((e.target as HTMLInputElement).value.length > 60) {
//         (e.target as HTMLInputElement).value = data.name
//     } else {
//         data.name = (e.target as HTMLInputElement).value
//     }
//     // console.log (name, data)
// }


export default component$(() => {

    // const data = useStore({
    //     name: '',
    //     lastname: '',
    //     email: '',
    //     tel: '',
    //     cidade: ''
    // })

    useStyles$(form)


    return (
        <form action="form.php" method="POST" class="frm p-0 lg:mr-20 bg-white rounded-lg" onSubmit$={(event: QwikSubmitEvent<HTMLFormElement>, form: HTMLFormElement) => {
          if (!Array.from(form.querySelectorAll('input')).every(i => i.checkValidity())) {
            alert('Dados inválidos. Por favor reveja as informações do formulário.')
            return false
          }
        }} >
        <div class="titlef w-full p-4 bg-[#003E88] max-w-[400px] mb-5 flex items-center justify-center">
          <h3 class="font-normal text-white text-2xl  "> Faça seu cadastro abaixo e receba mais informações </h3 >
          </div>


            <fieldset>
                <input required name="nome" type="text" placeholder='Nome' maxLength={20} /> 
                {/* onInput$={(e) => (data.name = (e.target as HTMLInputElement).value)} /> */}
            </fieldset>
            <fieldset>
                <input required name="email" type="email" placeholder='Email' maxLength={30} /> 
                {/* onInput$={(e) => (data.lastname = (e.target as HTMLInputElement).value)} /> */}
            </fieldset>


            <fieldset>
                <input required name="tel" type="tel" placeholder='Telefone' maxLength={20} minLength={9} />
                {/* onInput$={(e) => (data.tel = (e.target as HTMLInputElement).value)} /> */}
            </fieldset>

            <fieldset>
                <input required name="cidade" type="text" placeholder='Cidade' maxLength={100} />
                {/* onInput$={(e) => (data.email = (e.target as HTMLInputElement).value)} /> */}
            </fieldset>

            {/* <fieldset>
                <input required name="cidade" type="text" placeholder='Cidade' maxLength={50} />
            </fieldset> */}

            <button id="submit" type="submit" value="Enviar" aria-label='Enviar formulário' class="mb-5 uppercase">Simular Consórcio</button>
        </form>
    )
})

export const form = `
  form {
    padding: 2em; 
    text-align: center;
  }
  fieldset {
    background-color: white;
    border: 1px solid white;
    border-radius: 10px;
    padding: 7px 10px !important;
    min-width: 45%;
    max-width: 100%;
    margin-bottom: 15px !important;
  }

  form button {
    width: 100%;
    border-radius: 5px;
    background-color: #004C96 !important;
    transition: background-color .2s ease-in-out;
    border: 1px solid white;
    padding: 7px 0;
    color:white;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 1em;

    cursor: pointer;
  }

  form button:hover,  {
    background-color: rgb(30, 58, 138);
    outline:none;
  }
  select {
    width: 100%;
    border-radius: 10px;
    padding: 10px 10px 10px 10px; 
  }

  input {
    font-family: "Montserrat", sans-serif;
    font-size: .8em;
    border-radius: 5px;
    width: 95%;
  }
  input:invalid {
    border-color: #900;
  }

  input:focus:invalid {
    outline: none;
  }
`