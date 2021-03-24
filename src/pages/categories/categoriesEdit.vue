<template>
  <div>
        <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                <li class="breadcrumb-item"><a href="">Device</a></li>
                <li class="breadcrumb-item active" aria-current="page">Update Device</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Tickets Update Form</h6>
                      <form class="forms-sample">
                        <div class="form-group">
                            <label for="name">id</label>
                            <input type="text" class="form-control" id="id" autocomplete="off" name="id">
                              </div>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" autocomplete="off"
                                   placeholder="name" name="name">
                        </div>
                         <button type="submit" class="btn btn-primary mr-2">Submit</button>
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>