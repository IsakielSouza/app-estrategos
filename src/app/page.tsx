import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DialogClose } from "@radix-ui/react-dialog";
import { Search, PlusCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

    <div className="flex items-center justify-between">
      <form  className="flex items-center gap-2">
        <Input name="code" placeholder="código do produto"/>
        <Input name="product" placeholder="nome do produto"/>
        <Button type="submit" variant="link">
          <Search className="w-4 h-4 mr-2" />
          Filtrar resultados
        </Button>
      </form>

      <Dialog>
        <DialogTrigger asChild>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          Novo produto
        </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Novo produto</DialogTitle>
            <DialogDescription>
              Adicione um novo produto no sistema
            </DialogDescription>
          </DialogHeader>

        <form className="space-y-6">
          <div className="grid grid-cols-4 items-center text-right gap-3">
            <Label htmlFor="name">Produto</Label>
            <Input id="name" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center text-right gap-3">
            <Label htmlFor="name">Preço</Label>
            <Input id="price" className="col-span-3" />
          </div>

          <DialogFooter>
            <Button variant="outline">Cancelar</Button>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>

        </DialogContent>
      </Dialog>
    </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1 }</TableCell>
                  <TableCell>Produto {index + 1}</TableCell>
                  <TableCell>R$ 192,00</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
