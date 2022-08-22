import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore'
import { db } from '../../firebase-config'
import { useState, useCallback } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { Button, Input, Title, Wrapper, TextArea, List } from './styles'

const serviceConverter = {
  toFirestore: service => {
    return {
      client: service.client,
      description: service.description,
      orderService: service.orderService,
      quantity: service.quantity,
      dateOrder: service.dateOrder,
      priceService: service.priceService
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)

    return {
      id: snapshot.id,
      ...data
    }
  }
}

const Home = () => {
  const [id, setId] = useState('')
  const [client, setClient] = useState('')
  const [description, setDescription] = useState('')
  const [orderService, setOrderService] = useState('')
  const [quantity, setQuantity] = useState('')
  const [dateOrder, setDateOrder] = useState('')
  const [priceService, setPriceService] = useState('')

  const handleClient = useCallback(e => {
    setClient(e.target.value)
  }, [])

  const handleDescription = useCallback(e => {
    setDescription(e.target.value)
  }, [])

  const handleOrderService = useCallback(e => {
    setOrderService(e.target.value)
  }, [])

  const handleQuantity = useCallback(e => {
    setQuantity(e.target.value)
  }, [])

  const handlePriceService = useCallback(e => {
    setPriceService(e.target.value)
  })

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()

      if (!client || !description || !orderService) {
        alert('Preencha todos os campos!')
        return
      }

      if (id) {
        const ref = doc(db, 'services', id)
        await updateDoc(ref, {
          client: client,
          description: description,
          orderService: orderService,
          quantity: quantity,
          dateOrder: dateOrder,
          priceService: priceService
        })
      } else {
        const ref = collection(db, 'services')
        await addDoc(ref, {
          client: client,
          description: description,
          orderService: orderService,
          quantity: quantity,
          dateOrder: dateOrder,
          priceService: priceService
        })
      }
      setId('')
      setClient('')
      setDescription('')
      setOrderService('')
      setQuantity('')
      setDateOrder('')
      setPriceService('')
    },
    [id, client, description, orderService, quantity, dateOrder, priceService]
  )

  const [services, loading] = useCollectionData(
    collection(db, 'services').withConverter(serviceConverter)
  )
  const handleDelete = useCallback(id => {
    deleteDoc(doc(db, 'services', id))
  }, [])

  const handleEdit = useCallback(service => {
    setId(service.id)
    setClient(service.client)
    setDescription(service.description)
    setOrderService(service.orderService)
    setQuantity(service.quantity)
    setDateOrder(service.dateOrder)
    setPriceService(service.priceService)
  }, [])

  return (
    <Wrapper>
      <Title>Ordem de Serviço</Title>
      <form onSubmit={handleSubmit}>
        <div className="input-top">
          <Input
            type="text"
            placeholder="Cliente"
            value={client}
            onChange={handleClient}
          />
          <Input
            type="text"
            placeholder="Quantidade"
            value={quantity}
            onChange={handleQuantity}
          />
          <Input
            type="text"
            placeholder="Valor"
            value={priceService}
            onChange={handlePriceService}
          />
        </div>
        <div className="input-top">
          <Input
            type="text"
            placeholder="Serviço Solicitado"
            value={orderService}
            onChange={handleOrderService}
          />

          <Input
            type="date"
            placeholder="Data"
            value={dateOrder}
            onChange={e => {
              setDateOrder(e.target.value)
            }}
          />
        </div>
        <div>
          <TextArea
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={handleDescription}
          />
        </div>
        {loading && (
          <div>
            <Button type="submit" value="Cadastrar" disabled />
          </div>
        )}
        {!loading && (
          <div>
            <Button type="submit" value="Cadastrar" />
          </div>
        )}
      </form>

      {loading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <div className="container-data">
        {services?.map(service => (
          <List key={service.id}>
            <p>
              <strong>Cliente:</strong> {service.client}
            </p>
            <p>
              <strong>Serviço:</strong> {service.orderService}
            </p>
            <p>
              <strong>Valor:</strong> R$ {service.priceService}
            </p>
            <p>
              <strong>Quantidade:</strong> {service.quantity}
            </p>
            <p>
              <strong>Descrição:</strong> {service.description}
            </p>
            <p>
              <strong>Data:</strong> {service.dateOrder}
            </p>
            <div className="btn-data">
              <button
                className="btn-del"
                onClick={() => {
                  handleDelete(service.id)
                }}
              >
                Delete
              </button>
              <button
                className="btn-edit"
                onClick={() => {
                  handleEdit(service)
                }}
              >
                Editar
              </button>
            </div>
          </List>
        ))}
      </div>
    </Wrapper>
  )
}

export default Home
