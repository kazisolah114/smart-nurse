import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Edit, FileText, Paperclip, Trash2 } from 'lucide-react';

const Documentations = ({ selectedPatient, setSelectedPatient }) => {
    return (
        <div className={`col-span-8 ${selectedPatient ? '' : 'max-md:hidden'} bg-white rounded-md border p-3 `}>
            {
                selectedPatient ?
                    <div>
                        <Tabs defaultValue="notes" className="space-y-4">
                            <div className="flex sm:items-center sm:justify-between max-sm:flex-col max-sm:gap-4">
                                <div>
                                    <div className='flex items-center gap-3 md:hidden'>
                                        <Button variant={'outline'} onClick={() => setSelectedPatient(null)}><ArrowLeft className='w-5 h-5 text-grya-700' /></Button>
                                        <h5 className="font-semibold text-xl max-sm:text-lg sm:mb-1">{selectedPatient.name}</h5>
                                    </div>
                                    <h5 className="max-md:hidden font-semibold text-xl max-sm:text-lg sm:mb-1">{selectedPatient.name}</h5>
                                    <p className="text-gray-600">
                                        Room {selectedPatient.room} • {selectedPatient.condition}
                                    </p>
                                </div>
                                <TabsList className={'max-sm:w-full'}>
                                    <TabsTrigger value="notes" className={"cursor-pointer"}>Notes</TabsTrigger>
                                    <TabsTrigger value="create" className={"cursor-pointer"}>Create Note</TabsTrigger>
                                </TabsList>
                            </div>

                            <div className='mt-2'>
                                <TabsContent value="notes">
                                    {selectedPatient.notes.length ?
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Title</TableHead>
                                                    <TableHead>Type</TableHead>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Author</TableHead>
                                                    <TableHead className={"text-right"}>Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {selectedPatient.notes.map(note => {
                                                    return (
                                                        <TableRow key={note.id}>
                                                            <TableCell>{note.title}</TableCell>
                                                            <TableCell>{note.type}</TableCell>
                                                            <TableCell>{note.date}</TableCell>
                                                            <TableCell>{note.author}</TableCell>
                                                            <TableCell className={"text-right"}>
                                                                <div className='flex justify-end'>
                                                                    <Button variant={"ghost"} className={"cursor-pointer"}><Edit className='w-4 h-4' /></Button>
                                                                    <Button variant={"ghost"} className={"cursor-pointer"}><Trash2 className='w-4 h-4' /></Button>
                                                                </div>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                        :
                                        <div className='flex items-center justify-center w-full h-full'>
                                            <p className='text-gray-600'>No notes available for this patient</p>
                                        </div>
                                    }
                                </TabsContent>
                                <TabsContent value="create" className={'space-y-5'}>
                                    <div className='flex flex-col gap-2'>
                                        <Label htmlFor='note-title'>Note title</Label>
                                        <Input id='note-title' placeholder={'e.g., Morning Assesment'} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Label htmlFor='note-type'>Note type</Label>
                                        <Select defaultValue='assessment'>
                                            <SelectTrigger className='w-full'>
                                                <SelectValue placeholder='Select note type' />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='assessment'>Assessment</SelectItem>
                                                <SelectItem value='medication'>Medication</SelectItem>
                                                <SelectItem value='intervention'>Intervention</SelectItem>
                                                <SelectItem value='progress-note'>Progress Note</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <Label htmlFor='note-cotnent'>Note type</Label>
                                        <Textarea id='note-cotnent' placeholder='Enter detailed note here...' className={'min-h-[150px]'} />
                                    </div>
                                    <div className='flex justify-end gap-2'>
                                        <Button variant={'outline'} className={'cursor-pointer'}>Cancel</Button>
                                        <Button className={'cursor-pointer bg-teal-600 hover:bg-teal-700 duration-200'}>Save note</Button>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                    :
                    <div className='flex flex-col items-center justify-center h-full'>
                        <FileText className='w-12 h-12 text-gray-500' />
                        <h4 className='font-semibold mt-3 mb-2 text-xl text-gray-900'>No Patient Selected</h4>
                        <p className='text-gray-700'>Select a patient from the list to view or create documentation</p>
                    </div>
            }
        </div >
    );
};

export default Documentations;