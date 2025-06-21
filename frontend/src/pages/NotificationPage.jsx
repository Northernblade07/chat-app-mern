import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { acceptFriendRequest, getFriendRequest } from '../lib/api';

const NotificationPage = () => {
  const queryClient = useQueryClient();

  const {data:friendRequests,isloading} = useQuery({
 queryKey:["friendRequests"],
 queryFn:getFriendRequest
  })

  const {mutate:acceptRequestMutation , isPending} = useMutation({
    mutationFn:acceptFriendRequest,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["friendRequests"]})
      queryClient.invalidateQueries({queryKey:["friends"]})
    }
  })

  const incomingRequest = friendRequests?.incomingRequest
  return (
    <div></div>
  )
}

export default NotificationPage