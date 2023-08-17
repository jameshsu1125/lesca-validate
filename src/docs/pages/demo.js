import { Button, ButtonGroup, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import {
  ValidateEmail,
  ValidatePhone,
  ValidateURL,
  ValidateYoutubeURL,
  ValiDateInvoice,
} from '../../lib';

const Demo = () => {
  const emailRef = useRef();
  const phoneRef = useRef();
  const urlRef = useRef();
  const youtubeRef = useRef();
  const invoiceRef = useRef();

  const [emailResult, setEmailResult] = useState();
  const [phoneResult, setPhoneResult] = useState();
  const [urlResult, setUrlResult] = useState();
  const [youtubeResult, setYoutubeResult] = useState();
  const [invoiceResult, setInvoiceResult] = useState();

  return (
    <div className='Demo'>
      <h2>Validate Email</h2>
      <TextField inputRef={emailRef} defaultValue='username@host.com' label='email' fullWidth />
      <pre>
        <code>{JSON.stringify(emailResult ?? 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const { value } = emailRef.current;
            setEmailResult(ValidateEmail(value));
          }}
        >
          click
        </Button>
      </ButtonGroup>

      <hr style={{ margin: '10px 0' }} />

      <h2>Validate Phone[Taiwan only]</h2>
      <TextField inputRef={phoneRef} defaultValue='0912345678' label='phone' fullWidth />
      <pre>
        <code>{JSON.stringify(phoneResult ?? 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const { value } = phoneRef.current;
            setPhoneResult(ValidatePhone(value));
          }}
        >
          click
        </Button>
      </ButtonGroup>

      <hr style={{ margin: '10px 0' }} />

      <h2>Validate URL Address</h2>
      <TextField inputRef={urlRef} defaultValue='https://www.google.com/' label='URL' fullWidth />
      <pre>
        <code>{JSON.stringify(urlResult ?? 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const { value } = urlRef.current;
            setUrlResult(ValidateURL(value));
          }}
        >
          click
        </Button>
      </ButtonGroup>

      <hr style={{ margin: '10px 0' }} />

      <h2>Validate YouTube URL Address</h2>
      <TextField
        inputRef={youtubeRef}
        defaultValue='https://www.youtube.com/watch?v=09839DpTctU'
        label='YouTube URL'
        fullWidth
      />
      <pre>
        <code>{JSON.stringify(youtubeResult ?? 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const { value } = youtubeRef.current;
            setYoutubeResult(ValidateYoutubeURL(value));
          }}
        >
          click
        </Button>
      </ButtonGroup>

      <h2>Validate Invoice Number</h2>
      <TextField inputRef={invoiceRef} defaultValue='XS12345678' label='Invoice number' fullWidth />
      <pre>
        <code>{JSON.stringify(invoiceResult ?? 'no result')}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const { value } = invoiceRef.current;
            console.log(ValiDateInvoice(value));
            setInvoiceResult(ValiDateInvoice(value));
          }}
        >
          click
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
