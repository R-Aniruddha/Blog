import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { spacing } from '@material-ui/system'
import { makeStyles } from '@material-ui/core/styles'

import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

import SendIcon from '@material-ui/icons/Send'
import AccountCircle from '@material-ui/icons/AccountCircle'
import EmailIcon from '@material-ui/icons/Email'
import ChatIcon from '@material-ui/icons/Chat'

import styles from '../styles/CommentForm.module.css'

export default function Form({ _id }) {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onErrors = (errors) => console.error(errors)

  const onSubmit = async (data) => {
    console.log('Form Data')
    console.log(data)
    setIsSubmitting(true)
    let response
    setFormData(data)
    try {
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>Thanks for your comment!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Email: {formData.email} <br />
            Comment: {formData.comment}
          </li>
        </ul>
      </>
    )
  }

  return (
    <Grid container m={3} className={styles.container}>
      <Grid item xs={12} sm={10} lg={10}>
        <form onSubmit={handleSubmit(onSubmit, onErrors)}>
          <input {...register('_id')} type='hidden' name='_id' value={_id} />
          <Grid container className={styles.container}>
            <Grid item xs={12} lg={5}>
              <FormControl fullWidth>
                <InputLabel htmlFor='input-name'>Enter Name</InputLabel>
                <Input
                  id='input-name'
                  {...register('name')}
                  placeholder='John Wick'
                  startAdornment={
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
                <span>{errors.name && errors.name.message}</span>
              </FormControl>
            </Grid>
            <Grid item lg={1}>
              <Hidden mdDown>
                <Divider orientation='vertical' flexItem />
              </Hidden>
            </Grid>
            <Grid item xs={12} lg={5}>
              <FormControl fullWidth>
                <InputLabel htmlFor='input-email'>Enter Email</InputLabel>
                <Input
                  id='input-email'
                  type='email'
                  {...register('email')}
                  placeholder='your@email.com'
                  startAdornment={
                    <InputAdornment position='start'>
                      <EmailIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container className={styles.container}>
            <Grid item lg={11}>
              <FormControl fullWidth>
                <InputLabel htmlFor='input-comment'>Enter Comment</InputLabel>
                <Input
                  id='input-comment'
                  fullWidth
                  multiline
                  rows={2}
                  {...register('comment')}
                  placeholder='Lorem ipsum dolor sit amet, consect et pur. Lorem ipsum dolor sit amet, consectetur adip inc '
                  startAdornment={
                    <InputAdornment position='start'>
                      <ChatIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
            </Grid>
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} lg={6}>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                size='small'
                startIcon={<SendIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
