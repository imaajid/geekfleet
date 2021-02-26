<template>
  <div>
        <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                <li class="breadcrumb-item"><a href="">Device</a></li>
                <li class="breadcrumb-item active" aria-current="page">Create Device</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">New Device</h6>
                    <form class="forms-sample">
                        
                        <div class="form-group">
                            <label for="name">Device Name</label>
                            <input type="text" class="form-control" id="name" autocomplete="off"
                                   placeholder="Summary" name="summary">
                        </div>
                        <div class="form-group">
									<label>Categories</label>
									<select class="js-example-basic-single w-100">
										<option value="TX">PC/Laptop</option>
										<option value="NY">Mobile</option>
										<option value="FL">Networking</option>
										<option value="KN">Home Device</option>
										
									</select>
								</div>
                           <div class="form-group">
                            <label for="description">Serial Number</label>
                            <textarea class="form-control" id="description" name="description" placeholder="Description"
                             rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="note">Note</label>
                            <textarea class="form-control" id="note" name="note" placeholder="Description"
                             rows="5"></textarea>
                        </div>
                        	
                    
                    
                       
                        <button type="submit" class="btn btn-primary mr-2">Submit</button>
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

