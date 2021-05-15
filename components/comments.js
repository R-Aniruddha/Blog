import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { Divider } from '@material-ui/core'

export default function Comments({ comments = [] }) {
  if (comments.length == 0) {
    return <h2>No comments</h2>
  }
  return (
    <>
      <Divider />
      <h2>Comments:</h2>
      <List>
        {comments?.map(({ _id, publishedAt, name, email, comment }) => (
          <ListItem key={_id} alignItems='flex-start'>
            <ListItemIcon>
              <AccountCircleIcon fontSize='large' />
            </ListItemIcon>
            <ListItemText
              primary={
                <>
                  <span>
                    <Typography variant='subtitle1'>
                      <a href={`mailto:${email}`}>{name}</a> &nbsp;&nbsp;
                      {publishedAt ? publishedAt : '15/04'}
                    </Typography>
                  </span>
                </>
              }
              secondary={<Typography variant='subtitle1'>{comment}</Typography>}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  )
}
