import React, {useEffect, useState} from 'react';
import {Button, TextInput, View} from 'react-native'

export default function Filter({handleFilter, filter, setFilter})
{
    return (
        <>
            <TextInput placeholder="Type minimum"
                       autoCapitalize="none"
                       value={filter}
                       onChangeText={setFilter}
                       keyboardType = 'numeric'
            />
            <Button
                title='Filter'
                onPress={handleFilter}
            />
        </>
    )
}